import React, { useState } from 'react';
import { SingIn } from './SIngIn/SingIn';
import { SingUp } from './SIngUp/SingUp';
import { AuthContainer } from './Styles';

export const AuthPage = () => {
    const [showSingUp, setSingUpDissapear] = useState(true);

    const changeSingUpOnSingIn = () => setSingUpDissapear(!showSingUp);
    return (
        <AuthContainer>
            <SingUp changeSingUpOnSingIn={changeSingUpOnSingIn} showSingUp={showSingUp} />
            <SingIn changeSingUpOnSingIn={changeSingUpOnSingIn} showSingUp={showSingUp} />
        </AuthContainer>
    );
};
