import styled from "styled-components";

import PersonOutlinedIcon from "@mui/icons-material/PersonOutlined";
import LogoutIcon from '@mui/icons-material/Logout';

export const ButtonIcon = styled.button`
    background: ${() => (<PersonOutlinedIcon/>)};
`