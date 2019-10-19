module.exports = function (sequelize, DataTypes) {
    var School = sequelize.define("School", {
        school_id: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        school_name: {
            type: DataTypes.STRING,
            allowNull: false
        },
        level: DataTypes.STRING,
        street_address: DataTypes.STRING,
        city: DataTypes.STRING,
        state: DataTypes.STRING,
        zipcode: {
            type: DataTypes.STRING,
            allowNull: false
        },
        phone: DataTypes.STRING,
        link: DataTypes.STRING,
        network_manager: DataTypes.STRING,
        collaborative_name: DataTypes.STRING,
        yearly_progress_made: DataTypes.STRING,
        track_schedule: DataTypes.STRING,
        performance_status: DataTypes.STRING,
        performance_level: DataTypes.STRING,
        healthy_schools_certified: DataTypes.STRING,
        safety_icon: DataTypes.STRING,
        safety_score: DataTypes.INTEGER,
        family_involvement_strength: DataTypes.STRING,
        family_involvement_score: DataTypes.STRING,
        environment_strength: DataTypes.INTEGER,
        environment_score: DataTypes.INTEGER,
        instruction_strength: DataTypes.STRING,
        instruction_score: DataTypes.INTEGER,
        leaders_strength: DataTypes.STRING,
        leaders_score: DataTypes.INTEGER,
        teachers_strenght: DataTypes.STRING,
        teachers_score: DataTypes.INTEGER,
        parent_engagement_strenth: DataTypes.STRING,
        parent_engagement_score: DataTypes.INTEGER,
        parent_environment_strength: DataTypes.STRING,
        parent_environment_score: DataTypes.INTEGER,
        avg_student_attendance: DataTypes.FLOAT,
        misconduct_rate: DataTypes.FLOAT,
        avg_teacher_attendance: DataTypes.FLOAT,
        individ_compliance: DataTypes.FLOAT,
        pk_gr2_literacy: DataTypes.FLOAT,
        pk_gr2_math: DataTypes.FLOAT,
        gr3_gr5_math: DataTypes.FLOAT,
        gr3_gr5_read: DataTypes.FLOAT,
        gr3_gr5_pace_read: DataTypes.FLOAT,
        gr3_gr5_pace_math: DataTypes.FLOAT,
        gr6_gr8_math: DataTypes.FLOAT,
        gr6_gr8_read: DataTypes.FLOAT,
        gr6_gr8_pace_math: DataTypes.FLOAT,
        gr6_gr8_pace_read: DataTypes.FLOAT,
        gr8_explore_math: DataTypes.FLOAT,
        gr8_explore_read: DataTypes.FLOAT,


        
        
        
        
        
        ward_id: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        alderman: {
            type: DataTypes.STRING,
            allowNull: false
        },
        street_address: DataTypes.STRING,
        city: DataTypes.STRING,
        state: DataTypes.STRING,
        zipcode: DataTypes.STRING,
        phone_ward: {
            type: DataTypes.STRING,
            allowNull: false
        },
        fax: DataTypes.STRING,
        email: {
            type: DataTypes.STRING,
            allowNull: false
        },
        website: DataTypes.STRING,
        latlong: DataTypes.STRING,
        cityhall_street_address: DataTypes.STRING,
        cityhall_city: DataTypes.STRING,
        cityhall_state: DataTypes.STRING,
        cityhall_zipcode: DataTypes.STRING,
        cityhall_phone: DataTypes.STRING,
        boundaries_zipcodes: DataTypes.INTEGER,
        community_areas: DataTypes.INTEGER,
        extra_zipcodes: DataTypes.STRING,
        census_tracts: DataTypes.INTEGER,
        extra_wards: DataTypes.INTEGER,
        extra_computed_region: DataTypes.INTEGER,
    });
    //Associations will go here
    return Alderman;
};






