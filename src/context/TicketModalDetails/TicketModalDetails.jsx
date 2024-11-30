import { createContext } from "react";

const TicketContext = createContext({
  isOpenModal: false,
  openTicketModal: () => {},
  closeTicketModal: () => {},
});

export default TicketContext;

