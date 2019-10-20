module.exports = function (sequelize, DataTypes) {
    var Petition = sequelize.define("Petition", {
        first_name: {
            type: DataTypes.STRING,
            validate: {
            // should validate that letters are going in including dashes since some people have hyphenated names
                is: /^[A-Za-z\-]+$/i
            }
        },
        last_name: {
            type: DataTypes.STRING,
            // should validate that letters are going in including dashes since some people have hyphenated names
            is: /^[A-Za-z\-]+$/i
        },
        email: {
            type: DataTypes.STRING,
            //validate that it's an email
            isEmail: true
        },
        ward_id: DataTypes.INTEGER
    });
    //Associations will go here
    return Petition;
};





