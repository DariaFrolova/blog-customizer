import React from 'react';
import { Text } from 'components/text';
import styles from './Button.module.scss';

interface ButtonProps {
	title: string;
	onClick?: () => void;
	type?: 'submit' | 'reset' | 'button' | undefined;
	variant: 'submit' | 'reset';
}

export const Button: React.FC<ButtonProps> = ({
	title,
	onClick,
	type,
	variant,
}) => {
	const buttonClass = `${styles.button} ${styles[variant]}`;

	return (
		<button className={buttonClass} type={type} onClick={onClick}>
			<Text weight={800} uppercase>
				{title}
			</Text>
		</button>
	);
};
