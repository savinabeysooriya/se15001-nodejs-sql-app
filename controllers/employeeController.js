const employee = require('../model/employee');
exports.dictionaryDataGet = async (req, res) => {

    try {
        employee.findAll().then(result=>{
                res.status(200).json({
                    data: result,

                });
            }
        ).catch(e=>{
            console.log(e);
        });
    }catch (e) {
        console.log(e);
    }
}