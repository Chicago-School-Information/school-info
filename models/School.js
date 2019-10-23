// model organizing the data for each Chicago Public School
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
        safety_score: DataTypes.TEXT,
        family_involvement_strength: DataTypes.STRING,
        family_involvement_score: DataTypes.STRING,
        environment_strength: DataTypes.TEXT,
        environment_score: DataTypes.TEXT,
        instruction_strength: DataTypes.TEXT,
        instruction_score: DataTypes.TEXT,
        leaders_strength: DataTypes.STRING,
        leaders_score: DataTypes.STRING,
        teachers_strength: DataTypes.STRING,
        teachers_score: DataTypes.STRING,
        parent_engagement_strenth: DataTypes.STRING,
        parent_engagement_score: DataTypes.STRING,
        parent_environment_strength: DataTypes.STRING,
        parent_environment_score: DataTypes.STRING,
        avg_student_attendance: DataTypes.TEXT,
        misconduct_rate: DataTypes.FLOAT,
        avg_teacher_attendance: DataTypes.FLOAT,
        individ_compliance: DataTypes.FLOAT,
        pk_gr2_literacy: DataTypes.STRING,
        pk_gr2_math: DataTypes.STRING,
        gr3_gr5_math: DataTypes.STRING,
        gr3_gr5_read: DataTypes.STRING,
        gr3_gr5_pace_read: DataTypes.STRING,
        gr3_gr5_pace_math: DataTypes.STRING,
        gr6_gr8_math: DataTypes.STRING,
        gr6_gr8_read: DataTypes.STRING,
        gr6_gr8_pace_math: DataTypes.STRING,
        gr6_gr8_pace_read: DataTypes.STRING,
        gr8_explore_math: DataTypes.STRING,
        gr8_explore_read: DataTypes.STRING,
        isat_exceeding_math: DataTypes.STRING,
        isat_exceeding_reading: DataTypes.STRING,
        isat_value_math: DataTypes.STRING,
        isat_value_read: DataTypes.STRING,
        isat_value_color_math: DataTypes.STRING,
        isat_value_color_read: DataTypes.STRING,
        students_taking_algebra: DataTypes.STRING,
        students_passing_algebra: DataTypes.STRING,
        gr9_explore_2009: DataTypes.STRING,
        gr9_explore_2010: DataTypes.STRING,
        gr10_plan_2009: DataTypes.STRING,
        gr10_plan_2010: DataTypes.STRING,
        net_change_explore_plan: DataTypes.STRING,
        gr11_avg_act: DataTypes.STRING,
        net_change_plan_act: DataTypes.STRING,
        college_eligibility: DataTypes.STRING,
        graduation_rate: DataTypes.STRING,
        college_enrollment_rate: DataTypes.STRING,
        college_enrollment: DataTypes.INTEGER,
        general_services_route: DataTypes.INTEGER,
        gr9_ontrack_rate: DataTypes.STRING,
        rcdts_code: DataTypes.STRING,
        x_coordinate: DataTypes.FLOAT,
        y_coordinate: DataTypes.FLOAT,
        latitude: DataTypes.FLOAT,
        longitude: DataTypes.FLOAT,
        community_area_number: DataTypes.INTEGER,
        community_area_name: DataTypes.STRING,
        ward_id: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        police_district: DataTypes.INTEGER,
        location: DataTypes.STRING,
        boundaries_zipcodes: DataTypes.INTEGER,
        community_areas: DataTypes.INTEGER,
        extra_zipcodes: DataTypes.STRING,
        census_tracts: DataTypes.INTEGER,
        extra_wards: DataTypes.INTEGER,
        extra_computed_region: DataTypes.INTEGER
    });
    School.associate = function(models) {
        // a school belongs to an alderman because each school has only one ward/alderman
        School.belongsTo(models.Alderman, {
            foreignKey: "ward_id",
        });
      };
    return School;
};






