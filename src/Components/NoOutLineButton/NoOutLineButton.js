import PropTypes from 'prop-types';
import styles from './NoOutLineButton.module.scss';

const NoOutLineButton = (props) => {
	const { buttonText = '', iconType } = props;

	const LeftArrowIcon = <div className={styles.leftArrow}></div>;
	const IconMap = new Map([['leftArrow', LeftArrowIcon]]);

	return (
		<div className={styles.noOutLineButton}>
			{iconType && (
				<div className={styles.icon}>{IconMap.get(iconType)}</div>
			)}
			<div>{buttonText}</div>
		</div>
	);
};

NoOutLineButton.propTypes = {
	buttonText: PropTypes.string,
	iconType: PropTypes.string,
};

export default NoOutLineButton;
