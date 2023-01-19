import mongoose from 'mongoose';

const productStatSchema = new mongoose.Schema(
   {
    productId: {
        type: String,
    },
    yearlySalesTotal: {
        type: Number,
    },
    yearlyTotalSoldUnits: {
        type: Number,
    },
    year: {
        month: Number,
    },
    monthlyData: [
        {
        month: String,
        totalSales: Number,
        totalUnits: Number,
        },
    ],
    dailyData: [{
        date: String,
        totalSales: Number,
        totalUnits: Number,
    }],
   },
   { timestamps: true }
);

const ProductStat = mongoose.model("ProductStat", productStatSchema);
export default ProductStat;