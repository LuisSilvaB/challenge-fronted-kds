import React, {ReactNode} from 'react'
import { NotifyContainer, NotifyText } from './NotificationIndicator.styles';

interface NotificationIndicatorProps{
    children: ReactNode;
}

const NotificationIndicator:React.FC<NotificationIndicatorProps> = ({children}) => {
  return (
    <NotifyContainer>
     <NotifyText>
        {children}
     </NotifyText>
    </NotifyContainer>
  )
}

export default NotificationIndicator;
