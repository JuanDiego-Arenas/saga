import { Notyf } from 'notyf';
import 'notyf/notyf.min.css';

const notyf = new Notyf({
    duration: 3000,
    position: {
        x: 'left',
        y: 'bottom',
    },
    types: [
        {
            type: 'error',
            icon: {
                className: 'material-icons',
                tagName: 'i',
                text: 'warning'
            }
        },
        {
            type: 'success',
            background: 'green',
            duration: 50000,
            dismissible: true
        }
    ]
});

export { notyf }