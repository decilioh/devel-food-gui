import { Meta, StoryObj } from "@storybook/react/*";
import { Input } from './index'
import { FieldValues, RegisterOptions, UseFormRegister } from "react-hook-form";
import { MdOutlineEmail } from "react-icons/md";
import { CiUnlock } from "react-icons/ci";

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
    title: 'Components/Input',
    component: Input,
} as Meta<typeof Input>;


export const Default: StoryObj<typeof Input> = {

    args: {
        type: 'email',
        placeholder: 'Email',
        name: 'email',
        register: mockRegister,
        id: 'email-input',
        icon: <MdOutlineEmail />
    }
}

export const InputError: StoryObj<typeof Input> = {

    args: {
        type: 'email',
        placeholder: 'Email',
        name: 'email',
        register: mockRegister,
        id: 'email-input',
        icon: <MdOutlineEmail />,
        error: 'Insira um email correto',
    }
}

export const InputPassword: StoryObj<typeof Input> = {

    args: {
        type: 'password',
        placeholder: 'Senha',
        name: 'password',
        register: mockRegister,
        id: 'email-input',
        icon: <CiUnlock />,
    }
}