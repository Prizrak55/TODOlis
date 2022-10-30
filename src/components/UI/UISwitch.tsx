import styled from "@emotion/styled";
import { SwitchProps, Switch } from "@mui/material";

const UISwitch = (props: SwitchProps) =>{

  const UISwitch = styled(Switch)(() => ({
    width: 42,
    height: 25,
    padding: 0,
    '& .MuiSwitch-switchBase': {
      margin: 2,
      padding: 0,
      transform: 'translateX(0px)',
      '&.Mui-checked': {
        color: '#fff',
        transform: 'translateX(16px)',
        '& .MuiSwitch-thumb:before': {
          backgroundImage: `url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" height="16" width="16" viewBox="0 0 512 512"><path fill="${encodeURIComponent(
            '#a9a9a9',
          )}" d="M470.6 105.4c12.5 12.5 12.5 32.8 0 45.3l-256 256c-12.5 12.5-32.8 12.5-45.3 0l-128-128c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0L192 338.7 425.4 105.4c12.5-12.5 32.8-12.5 45.3 0z"/></svg>')`,
        },
        '& + .MuiSwitch-track': {
          opacity: 1,
          backgroundColor: '#10c200',
        },
      },
    },
    '& .MuiSwitch-thumb': {
      backgroundColor: '#f4f4f4',
      boxSizing: 'border-box',
      width: 22,
      height: 22,
      '&:before': {
        content: "''",
        position: 'absolute',
        width: '100%',
        height: '100%',
        left: 0,
        top: 0,
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center',
        backgroundImage: `url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" height="20" width="20" viewBox="0 0 320 512"><path fill="${encodeURIComponent(
          '#a9a9a9',
        )}" d="M310.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L160 210.7 54.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L114.7 256 9.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L160 301.3 265.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L205.3 256 310.6 150.6z"/></svg>')`,
      },
    },

    '& .MuiSwitch-track': {
      opacity: 1,
      backgroundColor: '#366dfe',
      borderRadius: 26 / 2,
    },
  }));
  return(
    <UISwitch
    {...props}
    />
  )
}

export default UISwitch;