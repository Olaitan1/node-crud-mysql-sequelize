module.exports = (sequelize, DataTypes) => {

    const Product = sequelize.define("product", {
        id:{
            type: DataTypes.UUIDV4,
            primaryKey: true,
            allowNull: false,
            unique: true
        },
        mediaType: {
            type: DataTypes.STRING,
            enum: ['Audio', 'Image']
        },
        name: {
            type: DataTypes.STRING,
            allowNull: false
        },
        status:{
            type: DataTypes.STRING,
            enum: ['Active', 'Inactive']
            
        },
        price: {
            type: DataTypes.INTEGER
        },
        description: {
            type: DataTypes.TEXT
        },
        published: {
            type: DataTypes.BOOLEAN
        },
        createdAt: {
            type: DataTypes.DATE
        },
        updatedAt: {
            type: DataTypes.DATE
        },
        url: {
            type: DataTypes.STRING
        },
        deletedAt: {    
            type: DataTypes.DATE
        }
    
    })

    return Product

}