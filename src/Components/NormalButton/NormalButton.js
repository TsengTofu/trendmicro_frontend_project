import PropTypes from 'prop-types';
import styles from './NormalButton.module.scss';

const IconType = (props) => {
	const { type } = props;

	const GoogleIcon = <div className={styles.google}></div>;
	const FacebookIcon = <div className={styles.facebook}></div>;
	const IconMap = new Map([
		['google', GoogleIcon],
		['facebook', FacebookIcon],
	]);
	return IconMap.get(type);
};

const NormalButton = (props) => {
	const {
		buttonText = '',
		styleType = '',
		onClickFunc = () => {},
		iconType,
	} = props;
	return (
		<div
			className={styles.normalButtonContainer}
			data-style-type={styleType}
			onClick={() => onClickFunc()}
		>
			{iconType && (
				<div className={styles.iconBlock}>
					<IconType type={iconType} />
				</div>
			)}
			<p>{buttonText}</p>
		</div>
	);
};

NormalButton.propTypes = {
	buttonText: PropTypes.string,
	styleType: PropTypes.string,
	onClickFunc: PropTypes.func,
	iconType: PropTypes.string,
};

export default NormalButton;
