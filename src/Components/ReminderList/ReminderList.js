import PropTypes from 'prop-types';
import CheckBox from '@/components/CheckBox/CheckBox';
import styles from './ReminderList.module.scss';

const ReminderList = (props) => {
	const {
		reminderList = [
			{ labelText: '8 Characters min.', isChecked: true },
			{ labelText: 'One number', isChecked: false },
		],
	} = props;
	return (
		<div className={styles.reminderListContainer}>
			{reminderList &&
				reminderList.map((item, index) => {
					const { labelText, isChecked } = item;
					return (
						<CheckBox
							key={`checkbox_${index}`}
							labelText={labelText}
							isChecked={isChecked}
							checkArrowType='round'
						/>
					);
				})}
		</div>
	);
};

ReminderList.propTypes = {
	reminderList: PropTypes.array,
};

export default ReminderList;
