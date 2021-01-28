json.array!(User.all) do |user|
    json.name user.username
end