import { useState } from 'react';
import Input from '@/components/Input/Input';
import NoOutLineButton from '@/components/NoOutLineButton/NoOutLineButton';
import CheckBox from '@/components/CheckBox/CheckBox';
import NormalButton from '@/components/NormalButton/NormalButton';
import ReminderList from '@/components/ReminderList/ReminderList';
import styles from '../styles/Home.module.scss';

export default function Home() {
	const [inputValue, setInputValue] = useState('');
	const [isCheckBoxActive, setIsCheckBoxActive] = useState(false);
	return (
		<div>
			<div className={styles.wrapper}>
				<NoOutLineButton buttonText='Back' iconType='leftArrow' />
				<div className={styles.formContainer}>
					<span>Start from free</span>
					<p>Create an account</p>
					<div className={styles.nameBlock}>
						<div className={styles.button}>
							<NormalButton
								iconType='google'
								buttonText='Sign up with Google'
								onClickFunc={() => {}}
								styleType='border'
							/>
						</div>
						<div className={styles.button}>
							<NormalButton
								iconType='facebook'
								buttonText='Sign up with Facebook'
								onClickFunc={() => {}}
								styleType='border'
							/>
						</div>
					</div>
					<div className={styles.instructionText}>
						<p>Or use your email for registration</p>
						<div className={styles.line}></div>
					</div>
					<div className={styles.nameBlock}>
						<div className={styles.input}>
							<Input
								labelText='First Name'
								value={inputValue}
								placeHolderText='First Name'
								onValueChange={(e) => {
									setInputValue(e.target.value);
								}}
							/>
						</div>
						<div className={styles.input}>
							<Input
								labelText='Last Name'
								value={inputValue}
								placeHolderText='Last Name'
								onValueChange={(e) => {
									setInputValue(e.target.value);
								}}
							/>
						</div>
					</div>
					<div className={styles.row}>
						<Input
							labelText='E-mail'
							value={inputValue}
							placeHolderText='E-mail'
							onValueChange={(e) => {
								setInputValue(e.target.value);
							}}
						/>
					</div>
					<Input
						labelText='Password'
						value={inputValue}
						isPassword
						placeHolderText='Password'
						onValueChange={(e) => {
							setInputValue(e.target.value);
						}}
					/>
					<div className={styles.reminderList}>
						<ReminderList />
					</div>
					<div className={styles.note}>
						<CheckBox
							isChecked={isCheckBoxActive}
							onClickCheckBox={() => {
								setIsCheckBoxActive((prev) => !prev);
							}}
							labelText='By creating account, you agree to accept our Privacy Policy, Terms of Service and Notification settings.'
						/>
					</div>
					<NormalButton
						buttonText='Create an Free Account!'
						onClickFunc={() => {}}
						styleType='fill'
					/>
					<div className={styles.remark}>
						Already have an account? <span>Log in</span>
					</div>
				</div>
			</div>
		</div>
	);
}
