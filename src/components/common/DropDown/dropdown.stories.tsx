import { Meta, StoryObj } from "@storybook/react/*";
import { FieldValues, RegisterOptions, UseFormRegister } from "react-hook-form";
import { Dropdown } from ".";

const mockRegister: UseFormRegister<FieldValues> = <TFieldName extends string = string>(
    name: TFieldName,
    options?: RegisterOptions<FieldValues>
) => {
    return {
        onChange: async (event) => {
            console.log(event);
        },
        onBlur: async () => {
            console.log('blur');
        },
        name,
        ref: (ref) => {
            console.log(ref);
        },
    };
};

export default {
    title: 'Components/DropDown',
    component: Dropdown,
} as Meta<typeof Dropdown>;


export const Default: StoryObj<typeof Dropdown> = {

    args: {
        register: mockRegister,
        options: [
            { value: 'Brasileira', label: 'Brasileira' },
            { value: 'Japonesa', label: 'Japonesa' },
            { value: 'Mexicana', label: 'Mexicana' }
        ]
    }
}
