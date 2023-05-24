
import { Modal, Box } from '@mui/material';


const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  minWidth: 300,
  maxWidth:500,
  bgcolor: 'background.paper',
  borderRadius: "18px",
  boxShadow: 24,
  p: 3,
};

const ModalFlotante = ({ isOpen, onClose, children }) => {
  return (
    <Modal open={isOpen} onClose={onClose}>
      <Box sx={style}>
        {children}
      </Box>
    </Modal>
  );
};

export default ModalFlotante;