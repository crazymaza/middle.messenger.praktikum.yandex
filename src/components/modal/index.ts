import ChatController from '../../controllers/ChatController';
import Block from '../../utils/block';
import store, { StoreEvents } from '../../utils/store';
import Button from '../button';
import Input from '../inputs/text';
import modalTemplate from './modal.hbs';
import * as classes from './modal.module.scss';

class Modal extends Block {
    constructor(props: Record<string, any> = {}) {
        const title = 'Найти пользователя';
        const input = new Input({
            name: 'searchInput',
            label: 'Id пользователя',
            type: 'text',
        });
        const button = new Button({
            text: 'Добавить',
            type: 'submit',
            events: {
                click: (event: FormDataEvent) => {
                    event.preventDefault();
                    const { activeChat } = store.getState();
                    const userId: HTMLInputElement = document.querySelector('input[name=searchInput]') as HTMLInputElement;
                    ChatController.addUsersToChat([+userId.value], activeChat?.id)
                        ?.then(() => alert('В чат добавлен пользователь'))
                        .catch(() => alert('Не удалось добавить пользователя'));
                    userId.value = '';
                    document.querySelector('#modal')?.classList.remove('activeModal');
                }
            }
        });
        const closeBtn = new Button({
            text: 'X',
            type: 'button',
            events: {
                click: () => document.querySelector('#modal')?.classList.remove('activeModal')
            }
        })

        store.on(StoreEvents.Updated, () => {
            const { modal } = store.getState();
            if (modal === 'remove') {
                button.setProps({
                    text: 'Удалить',
                    events: {
                        click: (event: FormDataEvent) => {
                            event.preventDefault();
                            const { activeChat } = store.getState();
                            const userId: HTMLInputElement = document.querySelector('input[name=searchInput]') as HTMLInputElement;
                            ChatController.deleteUser(activeChat?.id, [+userId.value])
                                ?.then(() => alert('Пользователь удалён из чата'))
                                .catch(() => alert('Не удалось удалить пользователя'));
                            userId.value = '';
                            document.querySelector('#modal')?.classList.remove('activeModal');
                        }
                    }
                })
            } else {
                button.setProps({
                    text: 'Добавить',
                    type: 'submit',
                    events: {
                        click: (event: FormDataEvent) => {
                            event.preventDefault();
                            const { activeChat } = store.getState();
                            const userId: HTMLInputElement = document.querySelector('input[name=searchInput]') as HTMLInputElement;
                            ChatController.addUsersToChat([+userId.value], activeChat?.id)
                                ?.then(() => alert('В чат добавлен пользователь'))
                                .catch(() => alert('Не удалось добавить пользователя'));
                            userId.value = '';
                            document.querySelector('#modal')?.classList.remove('activeModal');
                        }
                    }
                })
            }
        })

        super('div', {
            ...props, ...classes,
            title,
            input,
            button,
            closeBtn
        });
    }
    render(): DocumentFragment {
        return this.compile(modalTemplate, this.props);
    }
}

export default Modal;
