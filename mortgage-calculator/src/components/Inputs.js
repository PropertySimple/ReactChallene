import React, { Component } from 'react';
import styled from 'styled-components'
import { withStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import MenuItem from '@material-ui/core/MenuItem';
import NumberFormat from 'react-number-format';
import InputAdornment from '@material-ui/core/InputAdornment';

const Form = styled.form`
  display: flex;
  flex-grow: 2;
  flex-direction: column;
`;

const Row = styled.div`
  display: flex;
  margin-top: ${props => props.title ? '15px' : '0'};
`;

const Circle = styled.span`
  width: 20px;
  height: 20px;
  background: ${props => props.color ? props.color : '#ff3867'};
  border-radius: 50%;
  margin-right: 20px;
`;

const Title = styled.h4`
  font-weight: bold;
  margin: 0;
  margin-left: ${props => props.price ? "100px" : "0"};
`;

const styles = theme => ({
  container: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  textField: {
    marginLeft: '40px',
    marginRight: theme.spacing.unit,
    width: 200,
  },
  percentage: {
    marginLeft: '40px',
    marginRight: theme.spacing.unit,
    width: 120,
  },
  menu: {
    width: 200,
  },
});

function PriceFormatCustom(props) {
  const { inputRef, onChange, ...other } = props;

  return (
    <NumberFormat
      {...other}
      getInputRef={inputRef}
      onValueChange={values => {
        onChange({
          target: {
            value: values.value,
          },
        });
      }}
      thousandSeparator
      prefix="$ "
    />
  );
}

function PercentageFormatCustom(props) {
  const { inputRef, onChange, ...other } = props;

  return (
    <NumberFormat
      {...other}
      getInputRef={inputRef}
      onValueChange={values => {
        onChange({
          target: {
            value: values.value,
          },
        });
      }}
    />
  );
}

class Inputs extends Component {
  constructor(props) {
    super(props);

    this.state = {
      principalAndInterest: 1000,
      pmi: 155,
      price: 0,
      down: 0,
      downPercentage: 0,
      years: 30,
      interest: 4,
    }
  }

  handleChange = name => event => {
    this.setState({ [name]: event.target.value }, () => {
      const { price, down, years, interest } = this.state;

      const P = price - down;
      const r = interest / 12 / 100;
      const Y = 12 * years;

      const principalAndInterest = Math.round(P * r * (Math.pow(1 + r, Y)) / (Math.pow(1 + r, Y) - 1));

      this.setState({ principalAndInterest });
      this.props.updateValues(principalAndInterest, 0);
    });
  };

  render() {
    const { classes } = this.props;
    const { principalAndInterest, price, down, downPercentage, years, interest } = this.state;

    const yearsOptions = [
      {
        value: 30,
        label: '30-year fixed',
      },
      {
        value: 15,
        label: '15-year fixed',
      },
    ];

    return (
      <Form className={classes.container} noValidate autoComplete="off">
        <Row title>
          <Circle color="#ff3867" />
          <Title>{"Principal & Interest"}</Title>
          <Title price><NumberFormat value={principalAndInterest} displayType={'text'} thousandSeparator={true} prefix={'$'} />{`/mo`}</Title>
        </Row>

        <Row>
          <TextField
            label="Home Price"
            className={classes.textField}
            value={price}
            onChange={this.handleChange('price')}
            InputProps={{
              inputComponent: PriceFormatCustom,
            }}
            margin="normal"
          />
        </Row>
        
        <Row>
          <TextField
            label="Down Payment"
            className={classes.textField}
            value={down}
            onChange={this.handleChange('down')}
            InputProps={{
              inputComponent: PriceFormatCustom,
            }}
            margin="normal"
          />
          <TextField
            label=" "
            className={classes.percentage}
            value={downPercentage}
            onChange={this.handleChange('downPercentage')}
            margin="normal"
            InputProps={{
              inputComponent: PercentageFormatCustom,
              endAdornment: <InputAdornment position="end">%</InputAdornment>,
            }}
          />
        </Row>

        <Row>
          <TextField
            select
            label="Loan Details"
            className={classes.textField}
            value={years}
            onChange={this.handleChange('years')}
            SelectProps={{
              MenuProps: {
                className: classes.menu,
              },
            }}
            margin="normal"
          >
            {yearsOptions.map(option => (
              <MenuItem key={option.value} value={option.value}>
                {option.label}
              </MenuItem>
            ))}
          </TextField>
          <TextField
            label=" "
            className={classes.percentage}
            value={interest}
            onChange={this.handleChange('interest')}
            margin="normal"
            InputProps={{
              inputComponent: PercentageFormatCustom,
              endAdornment: <InputAdornment position="end">%</InputAdornment>,
            }}
          />
        </Row>

        <Row title><Circle color="#ffcb1f" /><Title>{"Include PMI"}</Title></Row>
      </Form>
    );
  }
}

export default withStyles(styles)(Inputs);
