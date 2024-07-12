import React from 'react';

import arrow from 'src/images/arrow.svg';
import styles from './ArrowButton.module.scss';

export type ArrowButtonProps = {
	onClick: () => void;
	isOpen: boolean;
};

// Компонент ArrowButton - кнопка, открывающая и закрывающая сайдбар с настройками
export const ArrowButton: React.FC<ArrowButtonProps> = ({
	onClick,
	isOpen,
}) => {
	return (
		<button
			role='button'
			aria-label='Открыть/Закрыть форму параметров статьи'
			className={`${styles.container} ${isOpen ? styles.container_open : ''}`} // Применяем стили в зависимости от состояния isOpen
			onClick={onClick}
			type='button'>
			<img
				src={arrow}
				alt='иконка стрелочки'
				className={`${styles.arrow} ${isOpen ? styles.arrow_open : ''}`} // Применяем стили в зависимости от состояния isOpen
			/>
		</button>
	);
};
