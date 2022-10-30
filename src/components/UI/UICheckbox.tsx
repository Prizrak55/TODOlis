import styled from "@emotion/styled";
import { CheckboxProps, Checkbox } from "@mui/material";

const UICheckbox = (props: CheckboxProps) => {
  const BpIcon = styled('span')(() => ({
    borderRadius: 7,
    width: 20,
    height: 20,
    backgroundColor: '#f5f8fa',
  }));

  const BpCheckedIcon = styled(BpIcon)({
    backgroundColor: '#f4f4f4',
    '&:before': {
      display: 'block',
      width: 20,
      height: 20,
      backgroundRepeat: 'no-repeat',
      backgroundPosition: 'center',
      backgroundImage: `url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" height="12" width="12" viewBox="0 0 512 512"><path fill="${encodeURIComponent(
        '#3b3b3b',
      )}" d="M470.6 105.4c12.5 12.5 12.5 32.8 0 45.3l-256 256c-12.5 12.5-32.8 12.5-45.3 0l-128-128c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0L192 338.7 425.4 105.4c12.5-12.5 32.8-12.5 45.3 0z"/></svg>')`,
      content: '""',
    },

  });
  
  return (
    <Checkbox
      color="default"
      checkedIcon={<BpCheckedIcon />}
      icon={<BpIcon />}
      {...props}
    />
  );
}

export default UICheckbox;