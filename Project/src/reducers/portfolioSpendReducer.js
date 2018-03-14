const portfolioSpendReducer = (state = {}, action) => {
    switch (action.type) {
        case 'CHANNEL_MIX':
            if(action.data){
                var firstScenarioDataList = action.data.filter(ele=> ele[0] === "1");
                var accounts = [];
                var physicians = [];
                var patients = [];
                firstScenarioDataList.forEach((record,index) =>{
                    if(record[1]=== "Accounts"){
                        accounts.push(
                            {
                                name:record[2],
                                suggestedMix:record[4],
                                currentMix:record[3],
                                id:index
                            }
                        )
                    }else if(record[1]=== "Physicians"){
                        physicians.push(
                            {
                                name:record[2],
                                suggestedMix:record[4],
                                currentMix:record[3],
                                id:index
                            }
                        )
                    }else if(record[1]=== "Patients"){
                        patients.push(
                            {
                                name:record[2],
                                suggestedMix:record[4],
                                currentMix:record[3],
                                id:index
                            }
                        )
                    }

                });
                return {'accounts':accounts,'physicians':physicians,'patients':patients};
            }
            break;
        default:
            return state
    }
};

export const getAccountsData = (state) =>{
    if(state.accounts){
        return JSON.parse(JSON.stringify(state.accounts))
    }else{
        return []
    }
};
export const getPhysiciansData = (state) =>{
    if(state.physicians){
        return JSON.parse(JSON.stringify(state.physicians))
    }else{
        return []
    }
};
export const getPatientsData = (state) =>{
    if(state.patients){
        return JSON.parse(JSON.stringify(state.patients))
    }else{
        return []
    }
};

export default portfolioSpendReducer;



