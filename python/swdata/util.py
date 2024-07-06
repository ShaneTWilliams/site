import datetime

def flatten(xss):
    return [x for xs in xss for x in xs]

def get_date_from_str(date_str):
        if date_str == "":
            return None

        dash_count = date_str.count("-")
        if dash_count == 2:
            return datetime.datetime.strptime(date_str, "%Y-%m-%d").date()
        if dash_count == 1:
            return datetime.datetime.strptime(date_str, "%Y-%m").date()
        if dash_count == 0:
            return datetime.datetime.strptime(date_str, "%Y").date()
