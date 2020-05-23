import { Component } from 'preact';
import style from './error.less';

export default class Error extends Component {
    render() {
        return (
            <div class={style.errorcolor}>
                {this.props.children}
            </div>
        );
    }
}
