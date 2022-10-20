import { GeneratedType } from "@cosmjs/proto-signing";
import { MsgCancelLoan } from "./types/loan/tx";
import { MsgApproveLoan } from "./types/loan/tx";
import { MsgLiquidateLoan } from "./types/loan/tx";
import { MsgRequestLoan } from "./types/loan/tx";
import { MsgRepayLoan } from "./types/loan/tx";

const msgTypes: Array<[string, GeneratedType]>  = [
    ["/loan.loan.MsgCancelLoan", MsgCancelLoan],
    ["/loan.loan.MsgApproveLoan", MsgApproveLoan],
    ["/loan.loan.MsgLiquidateLoan", MsgLiquidateLoan],
    ["/loan.loan.MsgRequestLoan", MsgRequestLoan],
    ["/loan.loan.MsgRepayLoan", MsgRepayLoan],
    
];

export { msgTypes }