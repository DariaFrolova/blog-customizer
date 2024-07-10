// import arrow from 'src/images/arrow.svg';

// import styles from './ArrowButton.module.scss';

// /** Функция для обработки открытия/закрытия формы */
// export type OnClick = () => void;

// export const ArrowButton = () => {
// 	return (
// 		/* Не забываем указаывать role и aria-label атрибуты для интерактивных элементов */
// 		<div
// 			role='button'
// 			aria-label='Открыть/Закрыть форму параметров статьи'
// 			tabIndex={0}
// 			className={styles.container}>
// 			<img src={arrow} alt='иконка стрелочки' className={styles.arrow} />
// 		</div>
// 	);
// };
import React from 'react';

import arrow from 'src/images/arrow.svg';
import styles from './ArrowButton.module.scss';

// Определяем интерфейс для пропсов компонента ArrowButton
interface ArrowButtonProps {
	onClick: () => void; // Функция, которая будет вызвана при клике на кнопку
	isOpen: boolean; // Флаг, указывающий, открыт ли сайдбар
}

// Компонент ArrowButton - кнопка, открывающая и закрывающая сайдбар с настройками
export const ArrowButton: React.FC<ArrowButtonProps> = ({
	onClick,
	isOpen,
}) => {
	return (
		<button
			role='button'
			aria-label='Открыть/Закрыть форму параметров статьи'
			className={`${styles.container} ${isOpen ? styles.container_open : ''}`}
			onClick={onClick}
			type='button'
			tabIndex={0}>
			<img
				src={arrow}
				alt='иконка стрелочки'
				className={`${styles.arrow} ${isOpen ? styles.arrow_open : ''}`}
			/>
		</button>
	);
};
