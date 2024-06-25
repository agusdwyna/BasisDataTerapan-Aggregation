db.transactions.aggregate([
	{
//Stage : 1 Mencari transaksi_count yang berjumlah dan lebih besar dari 50
		$match:{transaction_count:{$gt:50}}
	}, 
//Stage : 2 Melakukan grouping berdasarkan account_id dan menghitung totalCount
		{$group:{_id:"$account_id", totalCount:{$sum:"$transaction_count"}}}
]) 
