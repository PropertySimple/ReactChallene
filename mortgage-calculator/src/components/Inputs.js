import React, { Component } from 'react';
import styled from 'styled-components'
import { withStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import MenuItem from '@material-ui/core/MenuItem';
import NumberFormat from 'react-number-format';
import InputAdornment from '@material-ui/core/InputAdornment';
import Switch from '@material-ui/core/Switch';

const Form = styled.form`
  display: flex;
  flex-grow: 2;
  flex-direction: column;
`;

const Row = styled.div`
  display: flex;
  margin-top: ${props => props.title ? '15px' : '0'};
  align-items: center;
`;

const Circle = styled.span`
  width: 20px;
  height: 20px;
  background: ${props => props.color ? props.color : '#ff3867'};
  border-radius: 50%;
  margin-right: ${props => props.pmi ? '4px' : '20px'};
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
  colorSwitchBase: {
    color: 'white',
    '&$colorChecked': {
      color: '#ffcb1f',
      '& + $colorBar': {
        backgroundColor: '#ffcb1f',
      },
    },
  },
  colorBar: {},
  colorChecked: {},
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
      principalAndInterest: 0,
      price: 0,
      down: 0,
      downPercentage: 0,
      years: 30,
      interest: 4.125,
      pmiChecked: false,
    }

    this.yearsOptions = [
      {
        value: 30,
        label: '30-year fixed',
        interest: 4.125,
      },
      {
        value: 15,
        label: '15-year fixed',
        interest: 3.523,
      },
    ];
  }

  updateMonthlyPayment = () => {
    const { price, down, years, interest } = this.state;

    const P = price - down;
    const r = interest / 12 / 100;
    const Y = 12 * years;

    const principalAndInterest = Math.round(P * r * (Math.pow(1 + r, Y)) / (Math.pow(1 + r, Y) - 1));

    const pmi = this.state.pmiChecked ? Math.round(P * 0.01 / 12) : 0;

    this.setState({ principalAndInterest });
    this.props.updateValues(principalAndInterest, pmi);
  }

  handleChange = name => event => {
    this.setState({ [name]: event.target.value }, () => {
      this.updateMonthlyPayment();
    });
  };
  
  handleYearsChange = name => event => {
    const yearsOption = this.yearsOptions.find((option) => {
      return option.value === event.target.value;
    });

    const interest = yearsOption.interest;

    this.setState({ [name]: event.target.value, interest }, () => {
      this.updateMonthlyPayment();
    });
  };

  handlePMIChange = name => event => {
    this.setState({ [name]: event.target.checked }, () => {
      this.updateMonthlyPayment();
    });
  };

  render() {
    const { classes } = this.props;
    const { principalAndInterest, price, down, downPercentage, years, interest } = this.state;

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
            onChange={this.handleYearsChange('years')}
            SelectProps={{
              MenuProps: {
                className: classes.menu,
              },
            }}
            margin="normal"
          >
            {this.yearsOptions.map(option => (
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

        <Row title>
          <Circle pmi color="#ffcb1f" />
          <Switch
            classes={{
              switchBase: classes.colorSwitchBase,
              checked: classes.colorChecked,
              bar: classes.colorBar,
            }}
            checked={this.state.pmiChecked}
            onChange={this.handlePMIChange('pmiChecked')}
            value="pmiChecked"
          />
          <Title>{"Include PMI"}</Title>
        </Row>
      </Form>
    );
  }
}

export default withStyles(styles)(Inputs);
