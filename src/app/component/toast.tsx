import { useState } from "react"

type ToastProps = {
    message?: string,
    isShow?: boolean
}

const Toast: React.FC<ToastProps> = ({ message = "", isShow = false}) => {

    const [isVisible, setIsVisible] = useState<boolean>(isShow);

    const show = (info: string)=> {
        message = info;
        setIsVisible(true);
    }
    const hide = ()=> setIsVisible(false);

    return (
        <>
            {
                isVisible && <div className="toast">
                                <div className="toast-message w-[400px] h-auto top-1 right-1" >
                                    <p>
                                        { message }
                                    </p>
                                </div>
                            </div>
            }
        </>
    )
}

export default Toast;