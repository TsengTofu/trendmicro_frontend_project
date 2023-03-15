import PropTypes from 'prop-types';
import IconElement from '@/components/IconElement/IconElement';
import styles from './CheckBox.module.scss';

const CheckBox = (props) => {
	const {
		labelText = '',
		isChecked = false,
		onClickCheckBox,
		checkArrowType = 'square',
	} = props;

	const arrowType = new Map([
		['square', { url: './icon/check_icon.svg', width: 11, height: 9 }],
		['round', { url: './icon/round_check_icon.svg', width: 5, height: 4 }],
	]);

	const { url, width, height } = arrowType.get(checkArrowType);

	return (
		<div
			className={styles.checkboxContainer}
			onClick={() => onClickCheckBox && onClickCheckBox()}
		>
			<div
				className={styles.box}
				data-status={isChecked ? 'active' : ''}
				data-type={checkArrowType}
			>
				{isChecked && (
					<IconElement
						iconUrl={url}
						altText=''
						width={width}
						height={height}
					/>
				)}
			</div>
			<p data-size={checkArrowType === 'round' ? 'small' : ''}>
				{labelText}
			</p>
		</div>
	);
};

CheckBox.propTypes = {
	labelText: PropTypes.string,
	isChecked: PropTypes.bool,
};

export default CheckBox;
