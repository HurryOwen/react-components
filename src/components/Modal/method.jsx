import React from 'react';
import ReactDOM from 'react-dom';
import Button from 'components/Button';
import Modal from './Modal';

const pop = props => {
    let container = document.createElement('div');
    document.body.appendChild(container);
    const destory = () => {
        const result = ReactDOM.unmountComponentAtNode(container);
        if (result && container.parentElement) {
            container.parentElement.removeChild(container);
        }
    };

    ReactDOM.render(<Modal {...props} visible />, container);

    return {
        destory
    };
};

const alert = (props, content) => {
    const options = {
        children: content,
        maskClosable: false,
        size: 'sm',
        title: 'Alert',
        onClose: () => {
            modal.destory();
        },
        footer: (
            <Button size="lg" styleType="primary" onClick={() => modal.destory()}>
                确认
            </Button>
        )
    };

    const modal = pop({
        ...options,
        ...props
    });
    return modal;
};

const confirm = ({ onOk = () => {}, ...rest }, content) => {
    const options = {
        children: content,
        maskClosable: false,
        size: 'sm',
        title: 'Confirm',
        onClose: () => {
            modal.destory();
        },
        onOk: () => {
            modal.destory();
            onOk();
        }
    };

    const modal = pop({
        ...options,
        ...rest
    });
    return modal;
};

export { alert, confirm };
