


exports.createRecords = async (req,res,next) => {
    try {
        
        req.body.forEach(async element => {
            console.log(element)
            const doc = await Model.create(element);
        });
     
        res.status(200).json({
            status: 'sucess',
        })
    } catch (error) {
        res.status(500).json({
            status: 'error',
        })
        
    }

}

exports.getdocStatus = async (req,res,next) => {
    try {
        
        const ducCode = req.body.DucCode
        let doc = await Model.find({DucCode:ducCode})
        doc = doc[0]
        console.log(doc.Status)
        let status = doc.Status
        if(doc.Status == 'active'){
            doc.Status == "in-active"
        }
     
      
         res.status(200).json({
             status: 'sucess',
             status
         })
    } catch (error) {
        res.status(500).json({
            status: 'error',
        })
        
    }

}
exports.getRollWithSerialNumber = async (req,res,next) => {
    try {
        
        const SerialNumber = req.body.SerialNumber
        let doc = await Model.find({SerialNumber:SerialNumber}).select('-_v')
        doc = doc[0]
        console.log(doc)
      
         res.status(200).json({
             status: 'sucess',
             docStatus: doc
         })
    } catch (error) {
        res.status(500).json({
            status: 'error',
        })
        
    }
 
 }
