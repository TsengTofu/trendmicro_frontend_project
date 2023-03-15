import { useState } from 'react';
import PropTypes from 'prop-types';
import IconElement from '@/components/IconElement/IconElement';
import styles from './Input.module.scss';

const EyesIcon = (props) => {
	const { isOpen = false } = props;
	const EyesMap = new Map([
		[false, { iconUrl: './icon/hide_icon.svg', alt: '' }],
		[true, { iconUrl: './icon/view_icon.svg', alt: '' }],
	]);

	const { iconUrl, alt } = EyesMap.get(isOpen);
	return <IconElement iconUrl={iconUrl} altText={alt} />;
};

const Input = (props) => {
	const {
		labelText = '',
		value = '',
		onValueChange = () => {},
		isPassword = false, // 是否包含密碼
		isOpenEyes = false,
		placeHolderText = '',
	} = props;

	const [isShowPassword, setIsShowPassword] = useState(isOpenEyes);
	return (
		<div className={styles.inputContainer}>
			<div className={styles.left}>
				{value !== '' && <label>{labelText}</label>}
				<input
					value={value}
					placeholder={placeHolderText}
					onChange={onValueChange}
					type={isShowPassword || !isPassword ? 'text' : 'password'}
				/>
			</div>
			{isPassword && (
				<div
					className={styles.eyesIcon}
					onClick={() => setIsShowPassword((prev) => !prev)}
				>
					<EyesIcon isOpen={isShowPassword} />
				</div>
			)}
		</div>
	);
};

Input.propTypes = {
	labelText: PropTypes.string,
	value: PropTypes.string,
	onValueChange: PropTypes.func,
	isPassword: PropTypes.bool,
	isOpenEyes: PropTypes.bool,
	placeHolderText: PropTypes.string,
};

export default Input;
