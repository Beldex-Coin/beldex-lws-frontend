import SvgIcon from '@mui/material/SvgIcon';

const MoonDark = (props: any) => {
  return (
    <SvgIcon sx={props.styles} viewBox="0 0 21.787 21.787">
      {/* <svg xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 21.787 21.787"> */}
        <path id="icons8-moon_phase" d="M14.894,4A10.894,10.894,0,1,0,25.787,14.894,10.906,10.906,0,0,0,14.894,4ZM12.636,5.921a10.047,10.047,0,0,1,0,17.945,9.249,9.249,0,0,1,0-17.945Z" transform="translate(-4 -4)" fill={props.styles.fill} />
      {/* </svg> */}
    </SvgIcon>
  )
}

export default MoonDark;