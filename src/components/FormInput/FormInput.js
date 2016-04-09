import React, {Component, PropTypes} from 'react';

export default class FormInput extends Component {
  static propTypes = {
    id: PropTypes.string.isRequired,
    type: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    labelText: PropTypes.string.isRequired,
    value: PropTypes.string,
    onChange: PropTypes.func.isRequired
  };
  static defaultProps = {
    type: 'text'
  };
  onChange(event) {
    this.props.onChange(this.props.name, event.target.value);
  }

  render() {
    const styles = require('./FormInput.scss');
    return (
      <div className={styles.formGroup}>
        <label htmlFor={this.props.id}>
          {this.props.labelText}
        </label>
        <input value={this.props.value}
               name={this.props.name}
               onChange={this.onChange.bind(this)}
               type={this.props.type}
               className="form-control"
               id={this.props.id}/>
      </div>
    );
  }
}
