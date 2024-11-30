import React from "react";
import { useContext } from "react";
import TicketContext from "@/context/TicketModalDetails/TicketModalDetails";

export default function TicketAnswer() {
  const ticketModal = useContext(TicketContext);

  return (
    <>
      <div className="flex flex-col p-2 gap-2">
        <textarea
          className="resize-none border dark:bg-[#111827] mb-4 border-gray-300 p-2 rounded-lg w-full transition-all duration-200 focus:border-primary outline-none h-[7rem] font-Kalame"
          placeholder="متن پاسخ"
        ></textarea>
      </div>
      <div className="flex items-center justify-start gap-3 font-Kalame">
        <button
          onClick={() => ticketModal.closeTicketModal()}
          className="p-3 bg-red-500 text-white w-[15%] rounded-lg"
        >
          بیخیال
        </button>
        <button className="p-3 bg-green-500 text-white w-[15%] rounded-lg">
          ارسال پاسخ
        </button>
      </div>
    </>
  );
}
