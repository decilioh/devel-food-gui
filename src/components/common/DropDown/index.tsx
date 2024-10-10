import { useState, useRef, useEffect } from 'react';
import { RegisterOptions, UseFormRegister } from 'react-hook-form';
import { FaChevronDown, FaChevronUp } from 'react-icons/fa'; // Importando ícones
import { Container, ToggleDiv, CheckboxContainer, CheckboxItem, ErrorMessage } from './styles';
import { MdFastfood } from 'react-icons/md';

interface DropdownProps {
    name: string;
    register: UseFormRegister<any>;
    error?: string;
    rules?: RegisterOptions;
    options: { value: string; label: string }[];
    onChange?: (value: string) => void;
    value?: string;
}

export const Dropdown = ({
    name,
    register,
    error,
    rules,
    options,
    onChange,
    value = '',
}: DropdownProps) => {
    const [isOpen, setIsOpen] = useState(false);
    const [selectedValues, setSelectedValues] = useState<string>(value);
    const containerRef = useRef<HTMLDivElement>(null);


    const handleToggle = () => setIsOpen(!isOpen);

    const handleCheckboxChange = (optionValue: string) => {
        const updatedValues = selectedValues.includes(optionValue)
            ? selectedValues.split(',').filter(v => v !== optionValue).join(',')
            : selectedValues ? `${selectedValues},${optionValue}` : optionValue;

        setSelectedValues(updatedValues);
        if (onChange) onChange(updatedValues);
    };


    useEffect(() => {
        register(name, { ...rules, value: selectedValues });
    }, [name, rules, selectedValues]);

    useEffect(() => {
        setSelectedValues(value);
    }, [value]);



    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (containerRef.current && !containerRef.current.contains(event.target as Node)) {
                setIsOpen(false);
            }
        };

        document.addEventListener('mousedown', handleClickOutside);
        return () => document.removeEventListener('mousedown', handleClickOutside);
    }, []);

    return (
        <Container ref={containerRef}>
            <ToggleDiv onClick={handleToggle} $hasError={!!error}>
                <div>
                    <MdFastfood />
                    <p>{selectedValues.length > 0 ? `Selecionados: ${selectedValues.split(',').join(', ')}` : <span>Tipos de comida</span>}</p>
                </div>
                {isOpen ? <FaChevronUp /> : <FaChevronDown />}
            </ToggleDiv>

            {isOpen && (
                <CheckboxContainer>
                    {options.map(option => (
                        <CheckboxItem key={option.value}>
                            <input
                                type="checkbox"
                                id={option.value}
                                checked={selectedValues.includes(option.value)}
                                onChange={() => handleCheckboxChange(option.value)}
                            />
                            <label htmlFor={option.value}>{option.label}</label>
                        </CheckboxItem>
                    ))}
                </CheckboxContainer>
            )}

            {error && <ErrorMessage>{error}</ErrorMessage>}
        </Container>
    );
};