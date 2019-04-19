import React from "react";

class SpaceSeparatedInput extends React.Component {
  handleChange = event => {
    if (this.props.onChange) {
      this.props.onChange(event.target.value.trim().split(/[ ,]+/));
    }
  };
  handleBlur = event => {
    if (this.props.onBlur) {
      this.props.onBlur(event.target.value.trim().split(/[ ,]+/));
    }
  };

  render() {
    const { className, label,required } = this.props;
    return (
      <div className={className}>
        <input onBlur={this.handleBlur} onChange={this.handleChange} required={required} />
        <label>{label}</label>
      </div>
    );
  }
}

export default SpaceSeparatedInput;
