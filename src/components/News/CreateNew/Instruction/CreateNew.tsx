import React from 'react';
import { CreateNewText, CreateNewTitle, CreateInstructionBlock } from './Styles';

export const InstructionBlock = () => {
	return (
		<>
			<CreateInstructionBlock>
				<CreateNewTitle>Instruction</CreateNewTitle>
				<CreateNewText>
					Please, chose appropriate name for your new, describe it from good side and share your reflect to it with
					community.
				</CreateNewText>
			</CreateInstructionBlock>
		</>
	);
};
