// import type { Meta, StoryObj } from '@storybook/react';

// import { Button } from './Button';

// const meta: Meta<typeof Button> = {
// 	component: Button,
// };

// export default meta;
// type Story = StoryObj<typeof Button>;

// export const ButtonStory: Story = {
// 	render: () => {
// 		return (
// 			<>
// 				<Button
// 					title='Сбросить'
// 					type='reset'
// 					onClick={() => alert('клик на кнопку сбросить')}
// 				/>
// 				<Button
// 					title='Применить'
// 					type='submit'
// 					onClick={() => alert('клик на кнопку применить')}
// 				/>
// 			</>
// 		);
// 	},
// };

import type { Meta, StoryObj } from '@storybook/react';

import { Button } from './Button';

const meta: Meta<typeof Button> = {
 component: Button,
};

export default meta;

type Story = StoryObj<typeof Button>;

export const ButtonStory: Story = {
 render: () => {
  return (
   <>
    <Button
     title='Сбросить'
     type='reset'
     variant='reset' // Добавьте тип варианта для кнопки "reset"
     onClick={() => alert('клик на кнопку сбросить')}
    />
    <Button
     title='Применить'
     type='submit'
     variant='submit' // Добавьте тип варианта для кнопки "submit"
     onClick={() => alert('клик на кнопку применить')}
    />
   </>
  );
 },
};




// import React from 'react';
// import type { Meta, StoryObj } from '@storybook/react';

// import { Button } from './Button';

// const meta: Meta<typeof Button> = {
//   component: Button,
// };

// export default meta;

// type Story = StoryObj<typeof Button>;

// // export const ButtonStory: Story = {
// //   render: () => {
// //     return (
// //       <>
// //         <Button
// //           title='Сбросить'
// //           className='reset-button' // Добавляем класс для кнопки "Сбросить"
// //           onClick={() => alert('клик на кнопку сбросить')}
// //         />
// //         <Button
// //           title='Применить'
// //           className='submit-button' // Добавляем класс для кнопки "Применить"
// //           onClick={() => alert('клик на кнопку применить')} 
// //         />
// //       </>
// //     );
// //   },
// // };

// export const ButtonStory: Story = {
// 	render: () => {
// 	  return (
// 		<>
// 		  <Button
// 			title='Сбросить'
// 			type='reset'
// 			onClick={() => alert('клик на кнопку сбросить')}
// 			className='reset-button' // Добавляем класс для кнопки "Сбросить"
// 		  />
// 		  <Button
// 			title='Применить'
// 			type='submit'
// 			onClick={() => alert('клик на кнопку применить')}
// 			className='submit-button' // Добавляем класс для кнопки "Применить"
// 		  />
// 		</>
// 	  );
// 	},
//   };
