import React, { useState, useRef, useEffect } from 'react';
import styles from './ArticleParamsForm.module.scss';
import clsx from 'clsx';

import { ArrowButton } from 'components/arrow-button';
import { Button } from 'components/button';
import { Select } from '../select';
import { Separator } from '../separator';
import { RadioGroup } from '../radio-group';

import { Text } from '../text';

import {
	ArticleStateType,
	defaultArticleState,
	fontFamilyOptions,
	fontColors,
	backgroundColors,
	contentWidthArr,
	fontSizeOptions,
	fontFamilyClasses,
} from 'src/constants/articleProps';

export interface ArticleOptions {
	setChangeArticle: (param: ArticleStateType) => void;
	articleOptions: ArticleStateType;
}

export const ArticleParamsForm: React.FC<ArticleOptions> = ({
	setChangeArticle,
	articleOptions,
}) => {
	const [isOpen, setFormOpened] = useState<boolean>(false);

	const rootRef = useRef<HTMLDivElement>(null);

	const [formState, setFormState] = useState({
		...articleOptions,
	});

	const toggleOpenedForm = () => {
		setFormOpened((prevIsOpen) => !prevIsOpen);
	};

	const updateApp = (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		setChangeArticle(formState);
	};

	const resetForm = () => {
		setFormState(defaultArticleState);
		setChangeArticle(defaultArticleState);
	};

	const [isFormOpen, setIsFormOpen] = useState<boolean>(false);

	// Хук для обработки клика вне элемента и закрытию сайдбара по клику вне сайдбара
	const useOutsideClickClose = ({
		isOpen,
		rootRef,
		onClose,
		onChange,
	}: {
		isOpen: boolean;
		rootRef: React.RefObject<HTMLDivElement>;
		onClose: () => void;
		onChange?: () => void;
	}) => {
		useEffect(() => {
			const handleClickOutside = (event: MouseEvent) => {
				const target = event.target as Node;
				if (isOpen && rootRef.current && !rootRef.current.contains(target)) {
					onClose();
				}
			};

			document.addEventListener('mousedown', handleClickOutside);
			return () =>
				document.removeEventListener('mousedown', handleClickOutside);
		}, [isOpen, rootRef, onClose]);
	};

	useOutsideClickClose({
		isOpen,
		rootRef,
		onClose: () => {
			setFormOpened(false);
		},
	});

	return (
		<div ref={rootRef} className={styles.wrapper}>
			<ArrowButton onClick={toggleOpenedForm} isOpen={isOpen} />

			<aside
				className={clsx(styles.container, isOpen && styles.container_open)}>
				<form className={styles.form} onSubmit={updateApp} onReset={resetForm}>
					<Text
						children={'Задайте параметры'}
						as={'h2'}
						size={31}
						weight={800}
						fontStyle='normal'
						uppercase={true}
						align='left'
						family={fontFamilyClasses[0]}
					/>
					<Select
						selected={formState.fontFamilyOption}
						options={fontFamilyOptions}
						onChange={(selectedOption) => {
							setFormState({
								...formState,
								fontFamilyOption: selectedOption,
							});
						}}
						title='шрифт'
					/>
					<RadioGroup
						name={'18'}
						options={fontSizeOptions}
						selected={formState.fontSizeOption}
						onChange={(selectedOption) => {
							setFormState((prevState) => ({
								...prevState,
								fontSizeOption: selectedOption,
							}));
						}}
						title='размер шрифта'
					/>
					<Select
						selected={formState.fontColor}
						options={fontColors}
						onChange={(selectedOption) => {
							setFormState((prevState) => ({
								...prevState,
								fontColor: selectedOption,
							}));
						}}
						title='цвет шрифта'
					/>
					<Separator /> {/* Визуальный разделитель */}
					<Select
						selected={formState.backgroundColor}
						options={backgroundColors}
						onChange={(selectedOption) => {
							setFormState((prevState) => ({
								...prevState,
								backgroundColor: selectedOption,
							}));
						}}
						title='цвет фона'
					/>
					<Select
						selected={formState.contentWidth}
						options={contentWidthArr}
						onChange={(selectedOption) => {
							setFormState((prevState) => ({
								...prevState,
								contentWidth: selectedOption,
							}));
						}}
						title='ширина контента'
					/>
					<div className={styles.bottomContainer}>
						<Button
							title='Сбросить'
							type='button'
							variant='reset'
							onClick={resetForm}
						/>
						<Button title='Применить' type='submit' variant='submit' />
					</div>
				</form>
			</aside>
		</div>
	);
};
