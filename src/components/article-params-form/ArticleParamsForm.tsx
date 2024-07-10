import { ArrowButton } from 'components/arrow-button';
import { Button } from 'components/button';

import styles from './ArticleParamsForm.module.scss';

// export const ArticleParamsForm = () => {
// 	return (
// 		<>
// 			<ArrowButton onClick={function (): void {
// 				throw new Error('Function not implemented.');
// 			} } isOpen={false} />
// 			<aside className={styles.container}>
// 				<form className={styles.form}>
// 					<div className={styles.bottomContainer}>
// 						<Button title='Сбросить' type='reset' />
// 						<Button title='Применить' type='submit' />
// 					</div>
// 				</form>
// 			</aside>
// 		</>
// 	);
// };

export const ArticleParamsForm = () => {
	return (
	 <>
	  <ArrowButton onClick={function (): void {
	   throw new Error('Function not implemented.');
	  } } isOpen={false} />
	  <aside className={styles.container}>
	   <form className={styles.form}>
		<div className={styles.bottomContainer}>
		 <Button title='Сбросить' type='button' variant='reset' onClick={() => console.log("Reset clicked")} />
		 <Button title='Применить' type='submit' variant='submit' onClick={() => console.log("Submit clicked")} />
		</div>
	   </form>
	  </aside>
	 </>
	);
   };
