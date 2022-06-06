import SvgIcon from '@material-ui/core/SvgIcon';

const TGIcon = ({ viewBox, ...rest }) => (
  <SvgIcon viewBox={viewBox || '0 0 24 24'} width='40' height='40' {...rest}>
    {/* <g fill='transparent'>
      <path d='M0.5 0.5H39.5V39.5H0.5V0.5Z' stroke='currentColor' />
    </g> */}
    {/* <path
      d='M28.3097 11.2501C26.8341 10.5597 25.2731 10.069 23.6679 9.79102C23.4677 10.1521 23.2348 10.6393 23.0728 11.0251C21.3678 10.7653 19.6332 10.7653 17.9282 11.0251C17.7494 10.6035 17.5485 10.1915 17.3263 9.79102C15.7197 10.0695 14.1575 10.5613 12.6812 11.2535C9.74382 15.6928 8.94732 20.0218 9.34557 24.2889C11.0602 25.5836 12.9867 26.5706 15.0392 27.206C15.5003 26.5714 15.9082 25.8997 16.2587 25.1979C15.5921 24.9438 14.9494 24.631 14.3383 24.263C14.4992 24.1438 14.6567 24.0189 14.8086 23.8906C18.5109 25.622 22.5328 25.622 26.1913 23.8906C26.3454 24.0189 26.5029 24.1438 26.6616 24.263C26.0529 24.6298 25.4083 24.9448 24.7378 25.199C25.0877 25.9012 25.4956 26.5729 25.9573 27.2071C28.0114 26.5721 29.9392 25.5842 31.6543 24.2878C32.1212 19.3423 30.8567 15.0526 28.3097 11.2501ZM16.7627 21.6643C15.6512 21.6643 14.7399 20.627 14.7399 19.3636C14.7399 18.1003 15.6321 17.0608 16.7627 17.0608C17.8933 17.0608 18.8046 18.098 18.7854 19.3636C18.7866 20.627 17.8933 21.6643 16.7627 21.6643ZM24.2372 21.6643C23.1257 21.6643 22.2144 20.627 22.2144 19.3636C22.2144 18.1003 23.1066 17.0608 24.2372 17.0608C25.3678 17.0608 26.2791 18.098 26.2599 19.3636C26.2599 20.627 25.3678 21.6643 24.2372 21.6643Z'
      fill='currentColor'
    /> */}
    <path
      d='M20.665,3.717l-17.73,6.837c-1.21,0.486-1.203,1.161-0.222,1.462l4.552,1.42l10.532-6.645	c0.498-0.303,0.953-0.14,0.579,0.192l-8.533,7.701l0,0l0,0H9.841l0.002,0.001l-0.314,4.692c0.46,0,0.663-0.211,0.921-0.46	l2.211-2.15l4.599,3.397c0.848,0.467,1.457,0.227,1.668-0.785l3.019-14.228C22.256,3.912,21.474,3.351,20.665,3.717z'
      fill='currentColor'
    />
    {/* 
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
      <path d="M20.665,3.717l-17.73,6.837c-1.21,0.486-1.203,1.161-0.222,1.462l4.552,1.42l10.532-6.645	c0.498-0.303,0.953-0.14,0.579,0.192l-8.533,7.701l0,0l0,0H9.841l0.002,0.001l-0.314,4.692c0.46,0,0.663-0.211,0.921-0.46	l2.211-2.15l4.599,3.397c0.848,0.467,1.457,0.227,1.668-0.785l3.019-14.228C22.256,3.912,21.474,3.351,20.665,3.717z"/>
    </svg> */}
  </SvgIcon>
);

export default TGIcon;