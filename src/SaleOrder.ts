export class SaleOrder {

    status: string = "Draft";

    saveDraft(){
        this.status =  "Waiting for Update";
    };

    submit(){
        if(this.status === "Rejected"){
            throw new Error ("ไม่สามารถกด submit ได้");
        }

        this.status = "Wait for Approval";
    };

    setStatus(status: string){    
        this.status = status;
    };

    getStatus() {
        return this.status;
    };
}