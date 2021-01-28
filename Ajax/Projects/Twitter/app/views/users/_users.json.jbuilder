json.array!(User.all) do |user|
    json.name user.username
    json.userId user.id
end