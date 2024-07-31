const todoModel = (sequelize, DataTypes) =>{
    const Todo = sequelize.define(
        'todo',  // param1 : 테이블 이름 설정)
        { // param2 : 모델 컬럼 정의
        id:{
            type:DataTypes.INTEGER,
            primaryKey : true,
            autoIncrement :true,
            allowNull : false,
        },
        title :{
            type:DataTypes.STRING(255),
            allowNull:false,
        },
        done:{
            type:DataTypes.BOOLEAN,
            allowNull : false,
            defaultValue : false
        },
    },
    { // param3 : 모델 옵션 정의
        freezeTableName : true , // 테이블 명을 그대로 사용한다. (복수형으로 바까주지 X)
        timestamps : true, // 데이터의 추가/수정 시간을 자동으로 기록(컬럼)
    }
);
    return Todo;
}

module.exports=todoModel;
