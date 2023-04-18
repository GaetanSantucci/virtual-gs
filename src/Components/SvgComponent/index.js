
const SvgBackground = () => (
  <svg className="background_neon" xmlns="http://www.w3.org/2000/svg" viewBox="12 14 1366 627">
    <defs>
      <linearGradient id="header-shape-gradient" x1="50%" y1="0%" x2="50%" y2="100%" gradientTransform="rotate(45)">
        <stop offset="0%" stopColor="#7A5FFF">
          <animate attributeName="stop-color" values="#caf200; #a6ff01; #caf200" dur="4s" repeatCount="indefinite"></animate>
        </stop>
        <stop offset="100%" stopColor="#d8f765">
          <animate attributeName="stop-color" values="#d8f765; #baff5f; #d8f765" dur="4s" repeatCount="indefinite"></animate>
        </stop>
      </linearGradient>
    </defs>
    <g>
      <g id="Calque_2" data-name="Calque 2">
        <g id="Calque_1-2" data-name="Calque 1">
          <image className="background-neon" width="1397" height="627" xlink="data:image/png;base64,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" />
          <path className="background-neon" d="M1379.29,13.77H13.29V308.52a167.79,167.79,0,0,0,33.39,16.73c246.41,91.7,492.75,183.64,739.6,274,54.88,20.08,107,10.33,150.19-31.88Q1158,350.83,1379.29,134.05Z" />
        </g>
      </g>
    </g></svg>
)

const HalfHexagone = () => {
  return (
    <svg className='half_hexagone' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 486.06 284.12"><g id="Calque_2" data-name="Calque 2"><g id="Calque_1-2" data-name="Calque 1"><path d="M0,137.8A46,46,0,0,0,21.7,164c66.83,37.6,133.79,74.88,200.48,112.79,19.1,10.85,36.24,9.65,53.71-3.28,30.36-22.48,61.22-44.14,91.87-66.15,29.85-21.43,59.23-43.75,89.73-64,21.21-14.07,29.63-33.56,28.47-60.82Q484.19,41.27,482.62,0H0Z" /></g></g></svg>
  )
}

const IconHome = () => {
  return (
    <svg className='icon' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 44 44">
      <g><g id="Calque_2" data-name="Calque 2">
        <g id="Calque_1-2" data-name="Calque 1">
          <path d="M24.39,32.39V25.21a2.9,2.9,0,0,0-.09-.72,1.12,1.12,0,0,0-1.14-.88H17.3A1.23,1.23,0,0,0,16,24.91v7.48h-.19c-2,0-4.08,0-6.12,0A1.69,1.69,0,0,1,8,30.73a2.82,2.82,0,0,1,0-.41V19.84a3.33,3.33,0,0,1,.07-.7,1.9,1.9,0,0,1,.6-1L19.08,8.24a1.76,1.76,0,0,1,.89-.5,1.4,1.4,0,0,1,1.21.38c.38.33.74.68,1.1,1l9.46,8.91a2.25,2.25,0,0,1,.74,1.74V30.37a2.78,2.78,0,0,1-.06.64,1.65,1.65,0,0,1-1.24,1.35,1.93,1.93,0,0,1-.42,0H24.39Z" /></g></g></g></svg>
  )
}

const IconService = () => {
  return (
    <svg className='icon icon-service' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 34 34">
      <g>
        <g id="Calque_2" data-name="Calque 2">
          <g id="Calque_1-2" data-name="Calque 1">
            <path d="M16.58,2.14a8.5,8.5,0,0,1,8.56,8.55H22.56c-.78,0-.94.28-.58,1A1,1,0,0,1,21.75,13a1,1,0,0,1-1.26,0,1,1,0,0,1-.19-1.33c.35-.66.19-1-.56-1l-3,0-.14,0c0-1,0-2,0-3A1.18,1.18,0,0,0,16.49,7c-.23-.39-.53-.27-.86-.08a1,1,0,1,1-.1-1.71c.83.4,1,.27,1-.64Z" /><path d="M8,11.71H9.65c.71,0,.87-.32.53-.94a1,1,0,0,1,.17-1.35,1,1,0,0,1,1.48,1.34c-.35.66-.18.94.59,1h3.14V15a6.57,6.57,0,0,0,0,.77c.07.47.38.62.81.41a2,2,0,0,1,.6-.24.81.81,0,0,1,1,.56,1.57,1.57,0,0,1-.17,1.08.84.84,0,0,1-1.11.26,2.25,2.25,0,0,1-.21-.12c-.59-.31-.91-.14-.92.52,0,1.31,0,2.61,0,3.92v.67H13.1c-.09-.69-.12-1.36-.26-2a7.6,7.6,0,0,0-2.27-3.95A8.39,8.39,0,0,1,8,11.71Z" /><path d="M23.17,11.75h2c-.16.62-.27,1.21-.46,1.78a7.39,7.39,0,0,1-1.91,3.1,7.84,7.84,0,0,0-2.67,6,.67.67,0,0,1-.06.19H16.61V18.88a2,2,0,0,0,2.12-.82,2.58,2.58,0,0,0,.37-1.38c-.07-1.21-1-1.87-2.52-1.8V11.75H19.1c0,1.54.73,2.47,1.94,2.51S23.08,13.46,23.17,11.75Z" /><path d="M13,10.66C13,9,12.24,8.12,11,8.13s-2,1-2,2.52H8.07c-.83-3.4,3.48-8.31,7.44-8.44,0,.11,0,.22,0,.33,0,.52,0,1,0,1.53C13.67,4.34,12.93,5,13,6.3s1,1.85,2.51,1.88v2.48Z" /><path d="M19.51,27.94a3,3,0,0,1-5.87,0Z" /><path d="M16.57,25.88c1.45,0,2.89,0,4.33,0,.37,0,.71.07.72.51s-.35.51-.71.51H12.25c-.36,0-.72-.07-.72-.51s.34-.51.72-.51C13.69,25.89,15.13,25.88,16.57,25.88Z" /><path d="M16.6,23.86c1.43,0,2.85,0,4.27,0,.39,0,.76.05.75.53s-.39.48-.75.48q-4.29,0-8.59,0c-.38,0-.77,0-.75-.53s.38-.48.75-.48C13.72,23.87,15.16,23.86,16.6,23.86Z" /></g></g></g></svg>
  )
}

const IconProject = () => {
  return (
    <svg className='icon icon-project' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 54 50">
      <g>
        <g id="Calque_2" data-name="Calque 2">
          <g id="Calque_1-2" data-name="Calque 1">
            <path d="M12.79,16.28H20c1,0,1.06-.09,1.1-1.14H10.61V37.56a1.93,1.93,0,0,0,1.16-2q0-9.15,0-18.29C11.76,16.39,11.86,16.29,12.79,16.28Z" />
            <path d="M21,13.89c.25,0,.67-.19.72-.37.21-.69.63-.82,1.28-.82,4.29,0,8.58,0,12.86,0h.83V11.53h-.85c-3.67,0-7.34-.1-11,0-1.63.06-2.66-.32-3.09-1.93-.12-.45-.44-.5-.85-.5-1.79,0-3.58.11-5.35,0-1.29-.09-2.06.28-2.4,1.53-.2.75-.73.94-1.47.9-1.15,0-2.3,0-3.49,0v6.12q0,9,0,17.92a2,2,0,0,0,1.19,2V15.19c0-1.28,0-1.29,1.29-1.29C14.12,13.9,17.56,13.91,21,13.89Z" />
            <path d="M23.31,13.93a.79.79,0,0,0-.54.43c-.31.78-.57,1.58-.81,2.39a.9.9,0,0,1-1,.73c-2.37,0-4.75,0-7.13,0H13v.9c0,5.4,0,10.8,0,16.2,0,1-.16,2-.25,3.12H39.26c1.61,0,2.25-.64,2.25-2.25V14c-.12,0-.16-.09-.2-.09C35.31,13.92,29.31,13.91,23.31,13.93Z" />
          </g></g></g></svg>
  )
}

const IconContact = () => {
  return (
    <svg className='icon' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 49 41">
      <g>
        <g id="Calque_2" data-name="Calque 2">
          <g id="Calque_1-2" data-name="Calque 1">
            <path d="M8.94,9.68V27.56l9.62-9Z" />
            <path d="M35.87,9h-26L22.87,21Z" />
            <path d="M36.75,27.54V9.72l-9.59,8.89Z" />
            <path d="M23.67,21.85c-.78.72-.82.73-1.58,0L19.4,19.38,9.83,28.29H35.88l-9.56-8.9Z" />
          </g></g></g></svg>
  )
}

const Logo = () => {
  return (
    <svg className='icon icon-logo' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 186.55 186.03" >
      <g id="Calque_2" data-name="Calque 2">
        <g id="Calque_1-2" data-name="Calque 1">
          <g id="Calque_2-2" data-name="Calque 2">
            <g id="Calque_1-2-2" data-name="Calque 1-2">
              <path d="M68.16,165.93,98.6,101.45H94l-23.27,49Q47.24,98.31,23.68,46.1A88.64,88.64,0,0,1,52.34,19.49,86,86,0,0,1,93.28,7.85a89.07,89.07,0,0,1,43,11.64c1.29-2.35,2.58-4.7,3.85-7.06A91.46,91.46,0,0,0,92.83,0,93.17,93.17,0,0,0,18.89,37a99.85,99.85,0,0,0-6.34,9.45Z" />
              <path d="M122.81,92.12,119,100.31h59.12a81.73,81.73,0,0,1-7.58,28,82.65,82.65,0,0,1-49.45,45,86.34,86.34,0,0,1-12.93,3.5A79.57,79.57,0,0,1,93,178.19a70,70,0,0,1-10-.86L79.3,185A89.08,89.08,0,0,0,93,186a93.77,93.77,0,0,0,37.74-7.94A92.62,92.62,0,0,0,162.11,156q23.67-25.56,24.44-63.84H126.91l27.53-59.36c1.2,1.08,2.49,2.31,3.8,3.7a54.36,54.36,0,0,1,4.22,5.12l3.93-5.92a76.18,76.18,0,0,0-8.92-9.82c-.9-.84-1.81-1.64-2.71-2.37Z" />
              <path d="M2.6,70.67A92.31,92.31,0,0,0,0,92.57a95.47,95.47,0,0,0,6.14,33.18,91.41,91.41,0,0,0,46,50.6Z" />
            </g></g></g></g></svg>
  )
}

export { SvgBackground, HalfHexagone, IconHome, IconService, IconProject, IconContact, Logo };