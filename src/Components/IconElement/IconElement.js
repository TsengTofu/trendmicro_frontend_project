import PropTypes from 'prop-types';
import Image from 'next/image';

const IconElement = (props) => {
	const { iconUrl = '', altText = '', width = 20, height = 20 } = props;
	return <Image alt={altText} src={iconUrl} width={width} height={height} />;
};

IconElement.propTypes = {
	iconUrl: PropTypes.string,
	altText: PropTypes.string,
	width: PropTypes.number,
	height: PropTypes.number,
};

export default IconElement;
