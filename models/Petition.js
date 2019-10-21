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
    Petition.associate = function(models) {
        // a petition belongs to an alderman because each signature has only one ward/alderman
        Petition.belongsTo(models.Alderman, {
            foreignKey: "ward_id",
        });
      };
    return Petition;
};





