import { ArrowImg, SingUpSwitchBlock, SwitchLabel } from './Styles';
import arrowIng from '../../../images/arrow.svg';
import { AuthSwitchProps } from './Types';
import { useOutletContext } from 'react-router-dom';
import { AuthProps } from '../Types';

export const AuthSwitch = ({ isRight, switchText }: AuthSwitchProps) => {
	const { changeSingUpOnSingIn } = useOutletContext<AuthProps>();

	return (
		<SingUpSwitchBlock isRight={isRight} onClick={changeSingUpOnSingIn}>
			<SwitchLabel>{switchText}</SwitchLabel>
			<ArrowImg isRight={isRight} src={arrowIng} />
		</SingUpSwitchBlock>
	);
};
